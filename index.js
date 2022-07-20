const express = require("express");

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;

const PathMiddleware = function(request, response, next) {
    console.log(request.path);
    next();
}

app.use(PathMiddleware);

router.get("/", function(request, response) {
    response.send(
        `
            <h4>Endpoints</h4>
            <ul>
                <li><a href="/">/</a></li>
                <li><a href="/api">/api</a></li>
                <li><a href="/api/jokes">/api/jokes</a></li>
                <li><a href="/api/quotes">/api/quotes</a></li>
            </ul>
        `
    );
});

router.get("/api", function(request, response) {
    response.send("Root API endpoint");
});

router.get("/api/jokes", function(request, response) {
    response.send("Jokes endpoint");
});

router.get("/api/quotes", function(request, response) {
    response.send("Quotes endpoint");
});

app.use(router);
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
})