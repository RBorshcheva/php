const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    //Feamale first names 
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мария",
            "id_2": "Ольга",
            "id_3": "Елизавета",
            "id_4": "Анастасия",
            "id_5": "Евгения",
            "id_6": "Галина",
            "id_7": "Виктория",
            "id_8": "Вероника",
            "id_9": "Александра",
            "id_10": "Елена"
        }
    }`,

    //middle name construction
    middleNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Олего",
            "id_2": "Алесандро",
            "id_3": "Дмитрие",
            "id_4": "Ивано",
            "id_5": "Антоно",
            "id_6": "Максимо",
            "id_7": "Алесее",
            "id_8": "Петро",
            "id_9": "Андрее",
            "id_10": "Руслано"
        }
    }`,


    // professions
    professionJson: `{
        "count": 12,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Солдат",
            "id_3": "Шахтер",
            "id_4": "Врач",
            "id_5": "Курьер",
            "id_6": "Строитель",
            "id_7": "Официант",
            "id_8": "Программист",
            "id_10": "Учитель"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    //random gender, num 1 is Male, 2 is Female 
    randomGender: function () {
        const randnum = Math.floor(Math.round(Math.random()* 2));
        //console.log(randnum, '!!!!!!!!!!!!')
        const randomGender=this.randnum;
        if (randomGender==1) {
            return this.GENDER_MALE;
        }else {
            return this.GENDER_FEMALE;
        }
    },

    randomFirstName: function() {

        return this.randomValue(this.firstNameMaleJson);

    },

    //func for generation female names
    randomFirstNameFem: function() {
        return this.randomValue(this.firstNameFemaleJson);
    },


     randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    //random middle name 
    randomMiddleName: function() {
        return this.randomValue(this.middleNameJson);
    },

    //random profession
    randomProfession: function () {
        return this.randomValue(this.professionJson);
    },


    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        //this.person.firstName = this.randomFirstName();
        this.person.profession = this.randomProfession();
        //we check the condion of professions
        if ((this.person.profession == "Слесарь") || (this.person.profession == "Солдат") || (this.person.profession == "Шахтер")) 
        {
            this.person.gender = this.GENDER_MALE;
        }
        else {
            this.person.gender = this.randomGender();
        };

        //the constructor of Full Name with condition of gender, in the sur and middle names there are some addings due to the gender 
        if (this.person.gender == this.GENDER_MALE) {
            this.person.firstName = this.randomFirstName();
            this.person.surname = this.randomSurname();
            this.person.middleName = `${this.randomMiddleName()}вич`;
        }
        else {
            this.person.firstName = this.randomFirstNameFem();
            this.person.surname = `${this.randomSurname()}a`;
            this.person.middleName = `${this.randomMiddleName()}вна`;       
        }
        //generation of birth year
        this.person.year = this.randomIntNumber(1950, 2000);
        return this.person;
    }
};
