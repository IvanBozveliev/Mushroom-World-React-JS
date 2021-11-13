export const name = {
    minLength: 5,
    maxLength: 255
}

export const manufacturerReference = {
    min: 0,
    max: 999999999999999
};

export const statuses = ["Searching", "Found", "Ordered", "Shipped", "Received"];

export default {
    name,
    manufacturerReference,
    statuses
}