class Employee {
	show(name, salary) {
		return name + ' ' + salary;
	}
}
let Employee1 = new Employee;
console.log(Employee1.show('Vlad', '46000'));