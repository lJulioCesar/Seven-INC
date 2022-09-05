const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId'
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));
    return employees.map(x => ({
        ...x
    }))
}