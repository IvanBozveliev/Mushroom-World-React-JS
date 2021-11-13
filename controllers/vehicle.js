function get(req, res) {
    const vehicleId = req.params.id;
    res.status(200).send(
        vehicleId ? `Getting vehicle: ${vehicleId}.` : "Getting all Vehicles."
    );
}

function create(req, res) {
    res.status(201).send("Vehicle created.");
}

function update(req, res) {
    res.status(200).send("Vehicle updated.");
}

function remove(req, res) {
    res.status(200).send("Vehicle removed.");
}

function transfer(req, res) {
    res.status(200).send("Vehicle transferred");
}

export default {
    get,
    create,
    update,
    remove,
    transfer
}