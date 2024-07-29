
// principio de segregacion: las interfaces no tienen que ser obligatorias en clases que no la utilicen

interface Bird{
    eat(): void;
}

interface FlyingBird{
    fly(): void;
}

interface RunningBird{
    run(): void;
}

interface SwimmingBird{
    swim(): void
}


class Tucan implements Bird, FlyingBird{
    public fly(){}
    public eat(){}
}

class Humminbird implements Bird, FlyingBird{
    public fly(){}
    public eat(){}
}

class PericoAlasCortadasxD implements Bird{
    public eat(){}
}

class Avestruz implements Bird, RunningBird{
    public eat(){}
    public run(){}
}

class Pinguino implements Bird, SwimmingBird{
    public eat(){}
    public run(){}
    public swim(){}
}

