function get(req, res) {
    const malfunctionId = req.params.id;
    res.status(200).send(
        malfunctionId ? `Getting malfunction: ${malfunctionId}.` : "Getting all Malfunctions."
    );
}

function create(req, res) {
    res.status(201).send("Malfunction created.");
}

function update(req, res) {
    res.status(200).send("Malfunction updated.");
}

function remove(req, res) {
    res.status(200).send("Malfunction removed.");
}

export default {
    get,
    create,
    update,
    remove
}