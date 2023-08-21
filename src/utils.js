export const objectToFormData = (payload) => {
    let keys = Object.keys(payload)
    let data = new FormData()
    keys.forEach(key => {
        data.append(key, payload[key])
    })
    return data
};

