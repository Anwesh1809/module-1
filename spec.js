console.log("Technical Specifications : ");

var techSpec = 
[{Dimensions : {overallLength : "3500 mm", 
                overallWidth : "1600 mm", 
                overallHeight : "1490 mm", 
                wheelbase : "2360 mm", 
                trackWidth : {Front : "1405 mm", 
                              Rear : "1400 mm"}, 
                minimumTurningRadius : "4.5 m", 
                minimumGroundClearance : "170 mm"}},
 {Capacities : {seatingCapacity : "5 persons", 
                fuelTankCapacity : "35 litres"}},
 {Engine : {Type : "KB-Series", 
            numberOfCylinders : "3", 
            numberOfValves : "12", 
            Capacity : "998 cc/cm^3", 
            boreXStroke : "73.0 x 79.5 mm", 
            compressionRatio : "10:1", 
            maximumPower : "67/6,200 PS/rpm", 
            maximumTorque : "90/3,500 Nm/rpm",
            fuelDistribution : "Multipoint Injection"}},
  {Transmission : {Type : "5-speed MT"}},
  {Chasis : {Steering : "Rack & Pinion, Power assisted",
             Brakes : {Front : "Vetilated discs", 
                       Rear : "Drums"},
             Suspension : {Front : "MacPherson strut & coil spring",
                           Rear : "Isolated trailing link & coil spring"},
             shockAbsorbers : "Gas filled",
             Tyre : {tubeless : "150/80R13"}}},
  {Weights : {kerbWeight : {minWithFullOptions : "860-880 kg"},
              grossVehicleWeight : "1320 kg"}}
]

console.log(techSpec);
