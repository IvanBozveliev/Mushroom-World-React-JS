function get(req, res) {
    const partId = req.params.id;
    res.status(200).send(
        partId ? `Getting part: ${partId}.` : "Getting all parts."
    );
}

function create(req, res) {
    res.status(201).send("Part created.");
}

function update(req, res) {
    res.status(200).send("Part updated.");
}

function remove(req, res) {
    res.status(200).send("Part removed.");
}

export default {
    get,
    create,
    update,
    remove
}