function get(req, res) {
    const visitId = req.params.id;
    res.status(200).send(
        visitId ? `Getting visit: ${visitId}.` : "Getting all Visits."
    );
}

function create(req, res) {
    res.status(201).send("Visit created.");
}

function update(req, res) {
    res.status(200).send("Visit updated.");
}

function remove(req, res) {
    res.status(200).send("Visit removed.");
}

export default {
    get,
    create,
    update,
    remove
}