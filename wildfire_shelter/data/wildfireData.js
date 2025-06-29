export const LACountyWildfireData = {

    hazardZones: [

            {
                id: "very_high_1",
                name: "San Gabriel Mountains - Very High",
                severity: "Very High",
                type: "polygon",
                coordinates: [
                    [34.3776, -118.1543],
                    [34.3776, -117.6435],
                    [34.2456, -117.6435],
                    [34.2456, -118.1543]
                ],
                description: "Angeles National Forest area with steep terrain and dense vegetation"
            },
            {
                id: "very_high_2", 
                name: "Santa Monica Mountains - Very High",
                severity: "Very High",
                type: "polygon",
                coordinates: [
                    [34.1678, -118.7834],
                    [34.1678, -118.4521],
                    [34.0234, -118.4521],
                    [34.0234, -118.7834],
                    [34.1678, -118.7834]
                ],
                description: "Malibu and western Santa Monica Mountains with Mediterranean vegetation"
            },
            {
                id: "very_high_3",
                name: "Antelope Valley Foothills - Very High", 
                severity: "Very High",
                type: "polygon",
                coordinates: [
                    [34.6543, -118.3456],
                    [34.6543, -117.8765],
                    [34.5234, -117.8765],
                    [34.5234, -118.3456],
                    [34.6543, -118.3456]
                ],
                description: "Northern LA County foothills with chaparral and grassland"
            },
            {
                id: "high_1",
                name: "Eastern San Fernando Valley - High",
                severity: "High", 
                type: "polygon",
                coordinates: [
                    [34.2876, -118.4321],
                    [34.2876, -118.2543],
                    [34.1987, -118.2543],
                    [34.1987, -118.4321],
                    [34.2876, -118.4321], 
                ],
                description: "Foothill communities including parts of Burbank, Glendale, and Pasadena"
            },
            {
                id: "moderate_1",
                name: "Central LA Basin - Moderate",
                severity: "Moderate",
                type: "polygon", 
                coordinates: [
                    [34.1234, -118.4567],
                    [34.1234, -118.1234],
                    [33.9876, -118.1234],
                    [33.9876, -118.4567],
                    [34.1234, -118.4567], 
                ],
                description: "Urban areas with lower vegetation density"
            },
    
            {
                id: "very_high_4",
                name: "Eaton Fire – Very High",
                severity: "Very High",
                type: "polygon",
                coordinates: [
                  [34.2200, -118.1400],
                  [34.2200, -118.0900],
                  [34.1600, -118.0900],
                  [34.1600, -118.1400],
                  [34.2200, -118.1400]
                ],
                description: "Eaton Canyon foothills fire with major damage in Altadena/Pasadena area"
              },
            {
                id: "very_high_5",
                name: "Palisades Fire – Very High",
                severity: "Very High",
                type: "polygon",
                coordinates: [
                  [34.0500, -118.5500],
                  [34.0500, -118.4700],
                  [34.0000, -118.4700],
                  [34.0000, -118.5500],
                  [34.0500, -118.5500]
                ],
                description: "Santa Monica Mountains fire spanning Pacific Palisades, Malibu, Topanga"
              },
    
              {
                id: "high_2",
                name: "Hughes Fire – High",
                severity: "High",
                type: "polygon",
                coordinates: [
                  [34.5500, -118.7000],
                  [34.5500, -118.5500],
                  [34.4500, -118.5500],
                  [34.4500, -118.7000],
                  [34.5500, -118.7000]
                ],
                description: "Northern LA County foothills near Castaic Lake with Santa Ana wind influence"
              },
    
              {
                id: "high_3",
                name: "Kenneth Fire – High",
                severity: "High",
                type: "polygon",
                coordinates: [
                  [34.2000, -118.7000],
                  [34.2000, -118.6300],
                  [34.1500, -118.6300],
                  [34.1500, -118.7000],
                  [34.2000, -118.7000]
                ],
                description: "Vegetation fire near West Hills/Calabasas during wind-driven January fires"
              } 
        ],
    
        historicalFires: [
            {
                id: "station_fire_2009",
                name: "Station Fire",
                year: 2009,
                acres: 160557,
                location: [34.2778, -118.1347],
                startDate: "2009-08-26",
                endDate: "2009-10-16", 
                fatalities: 2,
                structuresDestroyed: 209,
                cause: "Arson",
                description: "Largest fire in LA County history, burned in Angeles National Forest"
            },
            {
                id: "palisades_fire_2025",
                name: "Palisades Fire",
                year: 2025,
                acres: 23713,
                location: [34.0522, -118.5701],
                startDate: "2025-01-07",
                endDate: "2025-01-31",
                fatalities: 5,
                structuresDestroyed: 5300,
                cause: "Under investigation",
                description: "Devastating January fire that destroyed Pacific Palisades neighborhoods during extreme Santa Ana winds"
            },
            {
                id: "eaton_fire_2025", 
                name: "Eaton Fire",
                year: 2025,
                acres: 14117,
                location: [34.1897, -118.1312],
                startDate: "2025-01-07",
                endDate: "2025-01-31",
                fatalities: 16,
                structuresDestroyed: 9418,
                cause: "Under investigation", 
                description: "Catastrophic fire in Altadena and Pasadena foothills, among deadliest in LA County history"
            },
            {
                id: "woolsey_fire_2018",
                name: "Woolsey Fire", 
                year: 2018,
                acres: 96949,
                location: [34.1014, -118.7834],
                startDate: "2018-11-08",
                endDate: "2018-11-21",
                fatalities: 3,
                structuresDestroyed: 1643,
                cause: "Equipment failure",
                description: "Devastating fire that burned through Malibu and Thousand Oaks"
            },
            {
                id: "saddleridge_fire_2019",
                name: "Saddleridge Fire",
                year: 2019,
                acres: 8799,
                location: [34.3123, -118.4567],
                startDate: "2019-10-10",
                endDate: "2019-10-31",
                fatalities: 1,
                structuresDestroyed: 19,
                cause: "Undetermined", 
                description: "Burned in Porter Ranch and Granada Hills areas"
            },
            {
                id: "la_tuna_fire_2017",
                name: "La Tuna Fire",
                year: 2017, 
                acres: 7194,
                location: [34.2654, -118.2987],
                startDate: "2017-09-01", 
                endDate: "2017-09-09",
                fatalities: 0,
                structuresDestroyed: 5,
                cause: "Undetermined",
                description: "Burned in Verdugo Mountains, largest fire in LA city limits"
            },
            {
                id: "creek_fire_2017",
                name: "Creek Fire", 
                year: 2017,
                acres: 15619,
                location: [34.3876, -118.2345],
                startDate: "2017-12-05",
                endDate: "2017-12-24",
                fatalities: 1,
                structuresDestroyed: 123,
                cause: "Undetermined",
                description: "Burned in Shadow Hills, Sunland-Tujunga areas"
            },
            {
                id: "sand_fire_2016",
                name: "Sand Fire",
                year: 2016,
                acres: 41383,
                location: [34.4756, -118.5234],
                startDate: "2016-07-22",
                endDate: "2016-08-05", 
                fatalities: 1,
                structuresDestroyed: 18,
                cause: "Vehicle",
                description: "Burned in Santa Clarita area and Angeles National Forest"
            },
            {
                id: "bridge_fire_2020",
                name: "Bridge Fire",
                year: 2020,
                acres: 8172,
                location: [34.4123, -118.2987],
                startDate: "2020-09-08",
                endDate: "2020-09-23",
                fatalities: 0,
                structuresDestroyed: 5,
                cause: "Undetermined",
                description: "Burned in northern Angeles National Forest during active fire season"
            },
            {
                id: "bobcat_fire_2020",
                name: "Bobcat Fire", 
                year: 2020,
                acres: 115997,
                location: [34.2415, -117.8756],
                startDate: "2020-09-06",
                endDate: "2020-12-22",
                fatalities: 0,
                structuresDestroyed: 171,
                cause: "Undetermined",
                description: "One of largest fires in LA County history, burned in San Gabriel Mountains"
            },
            {
                id: "lake_fire_2020",
                name: "Lake Fire",
                year: 2020, 
                acres: 31089,
                location: [34.5234, -118.4567],
                startDate: "2020-08-12",
                endDate: "2020-09-04",
                fatalities: 0,
                structuresDestroyed: 21,
                cause: "Human caused",
                description: "Burned in northern LA County near Lake Hughes"
            },
            {
                id: "ranch2_fire_2021",
                name: "Ranch2 Fire",
                year: 2021,
                acres: 4707,
                location: [34.4876, -118.3245],
                startDate: "2021-08-13", 
                endDate: "2021-08-28",
                fatalities: 0,
                structuresDestroyed: 5,
                cause: "Undetermined",
                description: "Burned in Castaic area during hot, dry conditions"
            },
            {
                id: "fairview_fire_2022",
                name: "Fairview Fire", 
                year: 2022,
                acres: 7539,
                location: [34.1234, -118.5432],
                startDate: "2022-09-05",
                endDate: "2022-09-19",
                fatalities: 0,
                structuresDestroyed: 35,
                cause: "Human caused",
                description: "Burned in western LA County foothill areas"
            },
            {
                id: "rabbit_fire_2023",
                name: "Rabbit Fire",
                year: 2023,
                acres: 8051,
                location: [34.5678, -118.2109],
                startDate: "2023-07-08",
                endDate: "2023-07-22", 
                fatalities: 0,
                structuresDestroyed: 12,
                cause: "Lightning",
                description: "Lightning-caused fire in northern LA County mountains"
            },
            {
                id: "york_fire_2023",
                name: "York Fire",
                year: 2023,
                acres: 93063,
                location: [35.0123, -117.8901],
                startDate: "2023-07-28", 
                endDate: "2023-08-16",
                fatalities: 0,
                structuresDestroyed: 2,
                cause: "Lightning",
                description: "Large fire that burned in eastern LA County and San Bernardino County"
            },
            {
                id: "line_fire_2024",
                name: "Line Fire",
                year: 2024,
                acres: 5632,
                location: [34.3456, -118.1876],
                startDate: "2024-09-12",
                endDate: "2024-09-26",
                fatalities: 0,
                structuresDestroyed: 8,
                cause: "Arson",
                description: "Human-caused fire in Angeles National Forest foothills"
            }
        ],
    
        highRiskCommunities: [
            {
                name: "Malibu",
                location: [34.0259, -118.7798],
                riskLevel: "Extreme",
                population: 10654,
                wildlandUrbanInterface: true,
                evacuationRoutes: ["PCH", "Malibu Canyon Rd", "Topanga Canyon Blvd"]
            },
            {
                name: "Altadena", 
                location: [34.1897, -118.1312],
                riskLevel: "Very High",
                population: 42777,
                wildlandUrbanInterface: true,
                evacuationRoutes: ["I-210", "Lake Ave", "Fair Oaks Ave"]
            },
            {
                name: "La Crescenta",
                location: [34.2324, -118.2437],
                riskLevel: "Very High", 
                population: 19653,
                wildlandUrbanInterface: true,
                evacuationRoutes: ["I-210", "Foothill Blvd", "Angeles Crest Hwy"]
            },
            {
                name: "Topanga",
                location: [34.0944, -118.6048],
                riskLevel: "Very High",
                population: 8289,
                wildlandUrbanInterface: true, 
                evacuationRoutes: ["Topanga Canyon Blvd", "PCH"]
            },
            {
                name: "Agua Dulce",
                location: [34.4961, -118.3259],
                riskLevel: "Very High",
                population: 3342,
                wildlandUrbanInterface: true,
                evacuationRoutes: ["Sierra Hwy", "Agua Dulce Canyon Rd"]
            }
        ],
    
        weatherStations: [
            {
                id: "RAWS_1",
                name: "Mount Wilson",
                location: [34.2259, -118.0576], 
                elevation: 5710,
                type: "RAWS",
                parameters: ["Wind Speed", "Wind Direction", "Temperature", "Humidity", "Fuel Moisture"]
            },
            {
                id: "RAWS_2", 
                name: "Malibu Hills",
                location: [34.0789, -118.7234],
                elevation: 1200,
                type: "RAWS",
                parameters: ["Wind Speed", "Wind Direction", "Temperature", "Humidity", "Fuel Moisture"]
            },
            {
                id: "RAWS_3",
                name: "Pacoima Dam", 
                location: [34.3456, -118.4123],
                elevation: 2400,
                type: "RAWS", 
                parameters: ["Wind Speed", "Wind Direction", "Temperature", "Humidity", "Fuel Moisture"]
            }
        ],
    
        evacuationCenters: [
            {
                name: "Zuma Beach",
                location: [34.0154, -118.8229],
                address: "30000 Pacific Coast Hwy, Malibu, CA 90265",
                capacity: 5000,
                type: "Beach Assembly Point"
            },
            {
                name: "Pierce College", 
                location: [34.2406, -118.5947],
                address: "6201 Winnetka Ave, Woodland Hills, CA 91371", 
                capacity: 10000,
                type: "Large Animal Evacuation"
            },
            {
                name: "Pasadena City College",
                location: [34.1560, -118.1318],
                address: "1570 E Colorado Blvd, Pasadena, CA 91106",
                capacity: 8000,
                type: "General Population"
            }
        ],
    

    utils: {
        getHazardColor(severity) {
            const colors = {
                "Very High": "#ff0000",
                "High": "#ff6600",
                "Moderate": "#ffcc00",
                "Low": "#99ff99",
                "Non-wildland": "#cccccc"
            };
            return colors[severity] || "#cccccc";
        },
        getFireSizeCategory(acres) {
            if (acres >= 100000) return "Mega Fire";
            if (acres >= 10000) return "Large Fire";
            if (acres >= 1000) return "Medium Fire";
            if (acres >= 100) return "Small Fire";
            return "Very Small Fire";
        },
        formatFirePopup(fire) {
            return `
                <h3>${fire.name}</h3>
                <p><strong>Year:</strong> ${fire.year}</p>
                <p><strong>Size:</strong> ${fire.acres.toLocaleString()} acres</p>
                <p><strong>Duration:</strong> ${fire.startDate} to ${fire.endDate}</p>
                <p><strong>Structures Lost:</strong> ${fire.structuresDestroyed}</p>
                <p><strong>Cause:</strong> ${fire.cause}</p>
                <p><strong>Description:</strong> ${fire.description}</p>
            `;
        },
        formatCommunityPopup(community) {
            return `
                <h3>${community.name}</h3>
                <p><strong>Risk Level:</strong> ${community.riskLevel}</p>
                <p><strong>Population:</strong> ${community.population.toLocaleString()}</p>
                <p><strong>WUI Community:</strong> ${community.wildlandUrbanInterface ? 'Yes' : 'No'}</p>
                <p><strong>Evacuation Routes:</strong> ${community.evacuationRoutes.join(', ')}</p>
            `;
        }
    }
    
    };
