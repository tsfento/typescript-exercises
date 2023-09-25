// // typescriptCopy code
// interface Vehicle {
//     brand: string;
//     speed: number;
    
//     accelerate(): void;
//     // Added new method that is return type void
//     brake(): void;
// }

// const car: Vehicle = {
//     brand: "Toyota",
//     speed: 120,
//     accelerate(): void {
//         console.log(`The ${this.brand} is accelerating`);
//     },
//     // Implemented new method
//     brake(): void {
//         console.log(`The ${this.brand} is braking`)
//     },
// }

// car.accelerate();
// // Called new method
// car.brake();