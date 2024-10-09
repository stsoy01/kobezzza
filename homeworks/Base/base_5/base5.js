// реализовать очередь с приоритетом Priority Queue
//https://habr.com/ru/companies/alfa/articles/651005/
// как работают вирусы на компе
//


class UserInterface {
    user = {}

    constructor(name, age, job) {
        this.user.name = name;
        this.user.age = age;
        this.user.job = job;
    }

    greeting() {
        if (this.isEmpty()) {
            console.log(`Hello ${this.user.name}`)
        } else {
            console.log('User name is empty')
        }
    }

    isEmpty() {
        return this.user.name;
    }
}

const user = new UserInterface('Sam', 33, 'software developer');
user.greeting();
