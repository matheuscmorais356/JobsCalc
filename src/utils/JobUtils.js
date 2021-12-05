module.exports = {
    remainingDays(job){
        // calculo do tempo restante
        const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()
    
        const createdDate = new Date(job.created_at)// data de criação do job
        const dueDay = createdDate.getDate() + Number(remainingDays)// data de entrega
    
        // diferença entre a data de criação do job para a data de entrega em milisegundos
        const dueDateInMs = createdDate.setDate(dueDay)
        const timeDiffInMs = dueDateInMs - Date.now()
        
        const dayInMs = 1000 * 60 * 60 * 24 // Tranformar milisegundos em dias
        const dayDiff= Math.ceil(timeDiffInMs / dayInMs)
    
        // restam x dias
        return dayDiff
    } ,
    calculateBudget: (job, valueHour) => valueHour * job['total-hours']   
}