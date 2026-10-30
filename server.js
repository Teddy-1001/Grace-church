import express from 'express'
import ejs from 'ejs'
const PORT = 3500
const app = express()
import path from 'path'
import { fileURLToPath } from 'url'
import schedule from './data/schedule.js'
import { fellowships, getFellowshipDetails } from './data/fellowships.js'
import { ministries, PARISH_CONTACT } from './data/ministries.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const viewsPath = path.join(__dirname, "views")
const publicPath = path.join(__dirname, "public")

app.use(express.static(publicPath))

app.set("view engine", "ejs")
app.set("views", viewsPath)

app.get('/', async (req, res) => {
    try {
        const response = await fetch('https://beta.ourmanna.com/api/v1/get?format=json');
        const data = await response.json();
        const verse = data.verse.details;
        res.render('index', { schedule, verse });
    } catch (error) {
        console.error(error.message);
        res.render('index', { schedule, verse: null });
    }
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/fellowships', (req, res) => {
    res.render('fellowships', { fellowships})
})
app.get('/fellowships/:id', (req, res) => {

    const { id } = req.params;

    const fellowship = fellowships.find(f => f.id === id);

    if (!fellowship) {
        return res.status(404).render('404');
    }

    const details = getFellowshipDetails(fellowship);

    res.render('fellowship-details', {
        fellowship,
        ...details
    });

});
app.get('/ministries', (req, res) => {
    res.render('ministries', {ministries})
})
app.get('/ministry/:id', (req, res)=>{
    const {id} = req.params
    const ministry = ministries.find(m => m.id === id)
    if(!ministry){
        return res.status(404).render('404')
    }
    res.render('ministry-details', {ministry, contacts:PARISH_CONTACT})
})

app.get("/sitemap.xml", (req, res) => {
    const BASE_URL = "https://grace-church-tau.vercel.app";

    const staticPages = [
        "/",
        "/about",
        "/contact",
        "/services",
        "/ministries",
        "/fellowships",
    ];

    const ministryPages = ministries.map(
        (ministry) => `/ministries/${ministry.id}`
    );

    const fellowshipPages = fellowships.map(
        (fellowship) => `/fellowships/${fellowship.id}`
    );

    const allPages = [
        ...staticPages,
        ...ministryPages,
        ...fellowshipPages,
    ];

    const urls = allPages.map((page) => `
        <url>
            <loc>${BASE_URL}${page}</loc>
        </url>
    `).join("");

    res.set("Content-Type", "application/xml");

    res.send(`<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${urls}
        </urlset>
    `);
});
// Export Express app for Vercel
export default app;

// Start local server during development
if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}