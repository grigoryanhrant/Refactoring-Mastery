const GRAVITATIONAL_CONSTANT = 9.81;

const potentialEnergy = (mass: number, height: number): number => {
    return mass * height * GRAVITATIONAL_CONSTANT;
}
