// реализовать очередь с приоритетом Priority Queue


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
