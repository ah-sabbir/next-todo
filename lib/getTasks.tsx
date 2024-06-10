import React from 'react'

interface parseInterface {
    id: Number,
    task: String,
    draft: Boolean,
    completed: Boolean,
    category: String,
    sentToTrash: Boolean,
    updatedDate: Date
}

const getTasks = () => {
    // const response:parseInterface = JSON.parse(open('./sampleData.json'))
    return "response" || null;
}

export default getTasks