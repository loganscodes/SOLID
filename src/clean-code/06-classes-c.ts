(() => {

    type Gender = 'M' | 'F';

    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date,
        ) { }

    }

    interface UserProps {
        birthDate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }

    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess = new Date();

        constructor({ name, gender, birthDate, email, role }: UserProps) {
            super(name, gender, birthDate)
            this.email = email;
            this.role = role
        }
    }

    interface UserSettingsProps {
        birthDate: Date
        gender: Gender,
        name: string,
        role: string,
        email: string,
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class UserSettings extends User {

        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({ birthDate, gender, name, role, email, lastOpenFolder, workingDirectory }: UserSettingsProps) {
            super({ email, role, name, gender, birthDate })
            this.lastOpenFolder = lastOpenFolder
            this.workingDirectory = workingDirectory
        }
    }

    const userSettings = new UserSettings(
        {
            birthDate: new Date('11-11-11'),
            email: 'logan@gmail.com',
            gender: 'M',
            lastOpenFolder: '/home',
            name: 'Logan',
            role: 'Admin',
            workingDirectory: 'usr/home',
        }
    )

    console.log(userSettings)


    // const newPerson = new Person('Logan', 'M', new Date('11-11-11'));
    // console.log(newPerson)


})();

