import express from 'express'
import ejs from 'ejs'
const PORT = 3500
const app = express()
import path from 'path'
import { fileURLToPath } from 'url'
import schedule from './data/schedule.js'
import { fellowships, getFellowshipDetails } from './data/fellowships.js'
import { ministries, PARISH_CONTACT } from './data/ministries.js'
import { sermons } from './data/sermons.js'
import { leadership } from './data/leadership.js'


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
    const meeting = ministry.meeting || [];

    const extraLinks = ministry.extraLinks || [];
    res.render('ministry-details', {ministry, meeting, extraLinks, contacts:PARISH_CONTACT})
})

app.get('/sermons', (req, res) => {
    const featuredSermon = sermons.find(sermon => sermon.featured);

    const pastSermons = sermons.filter(sermon => !sermon.featured);

    res.render('sermons', {
        featuredSermon,
        sermons: pastSermons
    });
});

app.get("/give", (req, res) => {
    res.render("give");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("/leadership", (req, res) => {
    const sortedLeadership = [...leadership].sort(
        (a, b) => a.order - b.order
    );

    res.render("leadership", {
        featuredLeaders: sortedLeadership.filter(leader => leader.featured),
        otherLeaders: sortedLeadership.filter(leader => !leader.featured)
    });
});

app.get("/services", (req, res) => {
    res.render("services", {
        title: "Church Services | ACK St. Phillips Roadblock"
    });
});


app.get("/admin/dashboard", (req, res) => {

    const schedules = [
        {
            title: "English Service",
            day: "Sunday",
            start_time: "8:00 AM",
            end_time: "9:00 AM"
        },
        {
            title: "Kiswahili Service",
            day: "Sunday",
            start_time: "10:00 AM",
            end_time: "12:30 PM"
        },
        {
            title: "Sunday School & Teens",
            day: "Sunday",
            start_time: "9:00 AM",
            end_time: "9:00 AM"
        },
        {
            title: "Estate Fellowships",
            day: "Sunday",
            start_time: "2:00 PM",
            end_time: "4:00 PM"
        }
    ];

    res.render("admin/dashboard", {
        stats: {
            leaders: leadership.length,
            schedules: schedules.length,
            sermons: 0,
            gallery: 0
        },
        schedules
    });

});

app.get("/admin/leadership", (req, res) => {

    const leaders = [...leadership].sort(
        (a, b) => a.order - b.order
    );

    res.render("admin/leadership", {
        leaders
    });

});

app.get("/admin/schedules", (req, res) => {

    const schedules = [
        {
            id: 1,
            title: "English Service",
            day: "Sunday",
            start_time: "08:00 AM",
            end_time: "09:00 AM",
            location: "Main Sanctuary",
            description: "Sunday worship service",
            is_active: true
        },
        {
            id: 2,
            title: "Kiswahili Service",
            day: "Sunday",
            start_time: "10:00 AM",
            end_time: "12:30 PM",
            location: "Main Sanctuary",
            description: "Kiswahili worship service",
            is_active: true
        },
        {
            id: 3,
            title: "Sunday School & Teens",
            day: "Sunday",
            start_time: "09:00 AM",
            end_time: "11:00 AM",
            location: "Children's Church",
            description: "Children and teenagers fellowship",
            is_active: true
        },
        {
            id: 4,
            title: "Estate Fellowships",
            day: "Wednesday",
            start_time: "02:00 PM",
            end_time: "04:00 PM",
            location: "Various Estates",
            description: "Community fellowship meetings",
            is_active: true
        }
    ];

    res.render("admin/schedules", {
        schedules
    });

});




app.get("/sitemap.xml", (req, res) => {
    const BASE_URL = "https://ackstphillipschurch.vercel.app";

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