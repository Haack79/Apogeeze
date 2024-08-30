export enum AMPM {
    AM = 'am',
    PM = 'pm'
}

type ChartData = {
    time: number;
    ampm: AMPM;
    price: number;
}

export type CustomEvent = {
    id: number;
    name: string;
    date: Date;
    price: number;
    chart?: ChartData[];
}

export const events: CustomEvent[] = [
    {id: 1, name: "Vikings Game", date: new Date('"2024-10-01"') , price: 200, chart: [
        { time: 7, ampm: AMPM.AM, price: 280 },
        { time: 8, ampm: AMPM.AM, price: 280 },
        { time: 9, ampm: AMPM.AM, price: 270 },
        { time: 11, ampm: AMPM.AM, price: 185 },
        { time: 12, ampm: AMPM.AM, price: 195 },
        { time: 1, ampm: AMPM.PM, price: 200 },
        { time: 2, ampm: AMPM.PM, price: 200 },
        { time: 5, ampm: AMPM.PM, price: 230 },
        { time: 6, ampm: AMPM.PM, price: 225 },
        { time: 7, ampm: AMPM.PM, price: 215 },
        { time: 9, ampm: AMPM.PM, price: 205 },
        { time: 10, ampm: AMPM.PM, price: 200 },
        { time: 11, ampm: AMPM.PM, price: 195 }
        ]
    },
    {
        id: 2,
        name: "Lakers Game",
        date: new Date("2024-10-02"),
        price: 250,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 290 },
            { time: 8, ampm: AMPM.AM, price: 285 },
            { time: 9, ampm: AMPM.AM, price: 275 },
            { time: 10, ampm: AMPM.AM, price: 260 },
            { time: 11, ampm: AMPM.AM, price: 240 },
            { time: 5, ampm: AMPM.PM, price: 190 },
            { time: 6, ampm: AMPM.PM, price: 185 },
            { time: 7, ampm: AMPM.PM, price: 180 },
            { time: 8, ampm: AMPM.PM, price: 175 },
            { time: 9, ampm: AMPM.PM, price: 170 },
            { time: 10, ampm: AMPM.PM, price: 165 },
            { time: 11, ampm: AMPM.PM, price: 160 }
        ]
    },
    {
        id: 3,
        name: "Bulls Game",
        date: new Date("2024-10-03"),
        price: 220,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 180 },
            { time: 8, ampm: AMPM.AM, price: 175 },
            { time: 9, ampm: AMPM.AM, price: 170 },
            { time: 10, ampm: AMPM.AM, price: 165 },
            { time: 11, ampm: AMPM.AM, price: 90 },
            { time: 12, ampm: AMPM.AM, price: 95 },
            { time: 6, ampm: AMPM.PM, price: 2125 },
            { time: 7, ampm: AMPM.PM, price: 240 },
            { time: 8, ampm: AMPM.PM, price: 255 },
            { time: 9, ampm: AMPM.PM, price: 260 },
            { time: 10, ampm: AMPM.PM, price: 275 },
            { time: 11, ampm: AMPM.PM, price: 280 }
        ]
    },
    {
        id: 4,
        name: "Jazz Game",
        date: new Date("2024-10-04"),
        price: 210,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 270 },
            { time: 8, ampm: AMPM.AM, price: 260 },
            { time: 9, ampm: AMPM.AM, price: 250 },
            { time: 10, ampm: AMPM.AM, price: 240 },
            { time: 11, ampm: AMPM.AM, price: 230 },
            { time: 12, ampm: AMPM.AM, price: 220 },
            { time: 1, ampm: AMPM.PM, price: 215 },
            { time: 2, ampm: AMPM.PM, price: 210 },
            { time: 3, ampm: AMPM.PM, price: 205 },
            { time: 4, ampm: AMPM.PM, price: 200 },
            { time: 5, ampm: AMPM.PM, price: 195 },
            { time: 6, ampm: AMPM.PM, price: 190 },
            { time: 7, ampm: AMPM.PM, price: 185 },
            { time: 8, ampm: AMPM.PM, price: 180 },
            { time: 9, ampm: AMPM.PM, price: 175 },
            { time: 10, ampm: AMPM.PM, price: 170 },
            { time: 11, ampm: AMPM.PM, price: 165 }
        ]
    },
    {
        id: 5,
        name: "Heat Game",
        date: new Date("2024-10-05"),
        price: 230,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 300 },
            { time: 8, ampm: AMPM.AM, price: 295 },
            { time: 9, ampm: AMPM.AM, price: 290 },
            { time: 10, ampm: AMPM.AM, price: 280 },
            { time: 11, ampm: AMPM.AM, price: 270 },
            { time: 12, ampm: AMPM.AM, price: 260 },
            { time: 1, ampm: AMPM.PM, price: 250 },
            { time: 2, ampm: AMPM.PM, price: 240 },
            { time: 3, ampm: AMPM.PM, price: 230 },
            { time: 4, ampm: AMPM.PM, price: 225 },
            { time: 5, ampm: AMPM.PM, price: 220 },
            { time: 6, ampm: AMPM.PM, price: 215 },
            { time: 7, ampm: AMPM.PM, price: 210 },
            { time: 8, ampm: AMPM.PM, price: 205 },
            { time: 9, ampm: AMPM.PM, price: 200 },
            { time: 10, ampm: AMPM.PM, price: 195 },
            { time: 11, ampm: AMPM.PM, price: 190 }
        ]
    },
    {
        id: 6,
        name: "Rockets Game",
        date: new Date("2024-10-06"),
        price: 150,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 160 },
            { time: 8, ampm: AMPM.AM, price: 155 },
            { time: 9, ampm: AMPM.AM, price: 150 },
            { time: 10, ampm: AMPM.AM, price: 145 },
            { time: 11, ampm: AMPM.AM, price: 140 },
            { time: 12, ampm: AMPM.AM, price: 135 },
            { time: 1, ampm: AMPM.PM, price: 130 },
            { time: 2, ampm: AMPM.PM, price: 125 },
            { time: 3, ampm: AMPM.PM, price: 120 },
            { time: 4, ampm: AMPM.PM, price: 115 },
            { time: 5, ampm: AMPM.PM, price: 110 },
            { time: 6, ampm: AMPM.PM, price: 105 },
            { time: 7, ampm: AMPM.PM, price: 100 },
            { time: 8, ampm: AMPM.PM, price: 95 },
            { time: 9, ampm: AMPM.PM, price: 90 },
            { time: 10, ampm: AMPM.PM, price: 85 },
            { time: 11, ampm: AMPM.PM, price: 80 }
        ]
    },
    {
        id: 7,
        name: "Mavericks Game",
        date: new Date("2024-10-07"),
        price: 175,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 180 },
            { time: 8, ampm: AMPM.AM, price: 175 },
            { time: 9, ampm: AMPM.AM, price: 170 },
            { time: 10, ampm: AMPM.AM, price: 165 },
            { time: 11, ampm: AMPM.AM, price: 160 },
            { time: 12, ampm: AMPM.AM, price: 155 },
            { time: 1, ampm: AMPM.PM, price: 150 },
            { time: 2, ampm: AMPM.PM, price: 145 },
            { time: 3, ampm: AMPM.PM, price: 140 },
            { time: 4, ampm: AMPM.PM, price: 135 },
            { time: 5, ampm: AMPM.PM, price: 130 },
            { time: 6, ampm: AMPM.PM, price: 125 },
            { time: 7, ampm: AMPM.PM, price: 120 },
            { time: 8, ampm: AMPM.PM, price: 115 },
            { time: 9, ampm: AMPM.PM, price: 110 },
            { time: 10, ampm: AMPM.PM, price: 105 },
            { time: 11, ampm: AMPM.PM, price: 100 }
        ]
    },
    {
        id: 8,
        name: "Warriors Game",
        date: new Date("2024-10-08"),
        price: 300,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 310 },
            { time: 8, ampm: AMPM.AM, price: 305 },
            { time: 9, ampm: AMPM.AM, price: 300 },
            { time: 10, ampm: AMPM.AM, price: 295 },
            { time: 11, ampm: AMPM.AM, price: 290 },
            { time: 12, ampm: AMPM.AM, price: 285 },
            { time: 1, ampm: AMPM.PM, price: 280 },
            { time: 2, ampm: AMPM.PM, price: 275 },
            { time: 3, ampm: AMPM.PM, price: 270 },
            { time: 4, ampm: AMPM.PM, price: 265 },
            { time: 5, ampm: AMPM.PM, price: 260 },
            { time: 6, ampm: AMPM.PM, price: 255 },
            { time: 7, ampm: AMPM.PM, price: 250 },
            { time: 8, ampm: AMPM.PM, price: 245 },
            { time: 9, ampm: AMPM.PM, price: 240 },
            { time: 10, ampm: AMPM.PM, price: 235 },
            { time: 11, ampm: AMPM.PM, price: 230 }
        ]
    },
    {
        id: 9,
        name: "Celtics Game",
        date: new Date("2024-10-09"),
        price: 220,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 130 },
            { time: 8, ampm: AMPM.AM, price: 125 },
            { time: 9, ampm: AMPM.AM, price: 220 },
            { time: 10, ampm: AMPM.AM, price: 215 },
            { time: 11, ampm: AMPM.AM, price: 210 },
            { time: 12, ampm: AMPM.AM, price: 205 },
            { time: 1, ampm: AMPM.PM, price: 200 },
            { time: 2, ampm: AMPM.PM, price: 195 },
            { time: 3, ampm: AMPM.PM, price: 190 },
            { time: 4, ampm: AMPM.PM, price: 185 },
            { time: 5, ampm: AMPM.PM, price: 180 },
            { time: 6, ampm: AMPM.PM, price: 175 },
            { time: 7, ampm: AMPM.PM, price: 170 },
            { time: 8, ampm: AMPM.PM, price: 265 },
            { time: 9, ampm: AMPM.PM, price: 260 },
            { time: 10, ampm: AMPM.PM, price: 255 },
            { time: 11, ampm: AMPM.PM, price: 250 }
        ]
    },
    {
        id: 10,
        name: "Knicks Game",
        date: new Date("2024-10-10"),
        price: 180,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 190 },
            { time: 8, ampm: AMPM.AM, price: 185 },
            { time: 9, ampm: AMPM.AM, price: 180 },
            { time: 10, ampm: AMPM.AM, price: 175 },
            { time: 11, ampm: AMPM.AM, price: 170 },
            { time: 12, ampm: AMPM.AM, price: 165 },
            { time: 1, ampm: AMPM.PM, price: 160 },
            { time: 2, ampm: AMPM.PM, price: 155 },
            { time: 3, ampm: AMPM.PM, price: 150 },
            { time: 4, ampm: AMPM.PM, price: 145 },
            { time: 5, ampm: AMPM.PM, price: 140 },
            { time: 6, ampm: AMPM.PM, price: 235 },
            { time: 7, ampm: AMPM.PM, price: 230 },
            { time: 8, ampm: AMPM.PM, price: 225 },
            { time: 9, ampm: AMPM.PM, price: 220 },
            { time: 10, ampm: AMPM.PM, price: 235 },
            { time: 11, ampm: AMPM.PM, price: 210 }
        ]
    },
    {
        id: 11,
        name: "Hawks Game",
        date: new Date("2024-10-11"),
        price: 160,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 170 },
            { time: 8, ampm: AMPM.AM, price: 165 },
            { time: 9, ampm: AMPM.AM, price: 160 },
            { time: 10, ampm: AMPM.AM, price: 155 },
            { time: 11, ampm: AMPM.AM, price: 150 },
            { time: 12, ampm: AMPM.AM, price: 145 },
            { time: 1, ampm: AMPM.PM, price: 140 },
            { time: 2, ampm: AMPM.PM, price: 135 },
            { time: 3, ampm: AMPM.PM, price: 130 },
            { time: 4, ampm: AMPM.PM, price: 125 },
            { time: 5, ampm: AMPM.PM, price: 130 },
            { time: 6, ampm: AMPM.PM, price: 145 },
            { time: 7, ampm: AMPM.PM, price: 150 },
            { time: 8, ampm: AMPM.PM, price: 155 },
            { time: 9, ampm: AMPM.PM, price: 200 },
            { time: 10, ampm: AMPM.PM, price: 205 },
            { time: 11, ampm: AMPM.PM, price: 210 }
        ]
    },
    {
        id: 12,
        name: "Suns Game",
        date: new Date("2024-10-12"),
        price: 140,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 70 },
            { time: 8, ampm: AMPM.AM, price: 76 },
            { time: 9, ampm: AMPM.AM, price: 90 },
            { time: 10, ampm: AMPM.AM, price: 100 },
            { time: 11, ampm: AMPM.AM, price: 130 },
            { time: 12, ampm: AMPM.AM, price: 125 },
            { time: 1, ampm: AMPM.PM, price: 120 },
            { time: 2, ampm: AMPM.PM, price: 115 },
            { time: 6, ampm: AMPM.PM, price: 95 },
            { time: 7, ampm: AMPM.PM, price: 90 },
            { time: 8, ampm: AMPM.PM, price: 125 },
            { time: 9, ampm: AMPM.PM, price: 130 },
            { time: 10, ampm: AMPM.PM, price: 140 },
            { time: 11, ampm: AMPM.PM, price: 180 }
        ]
    },
    {
        id: 13,
        name: "Spurs Game",
        date: new Date("2024-10-13"),
        price: 170,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 180 },
            { time: 8, ampm: AMPM.AM, price: 175 },
            { time: 9, ampm: AMPM.AM, price: 170 },
            { time: 10, ampm: AMPM.AM, price: 165 },
            { time: 11, ampm: AMPM.AM, price: 160 },
            { time: 12, ampm: AMPM.AM, price: 155 },
            { time: 1, ampm: AMPM.PM, price: 150 },
            { time: 2, ampm: AMPM.PM, price: 145 },
            { time: 3, ampm: AMPM.PM, price: 140 },
            { time: 4, ampm: AMPM.PM, price: 135 },
            { time: 5, ampm: AMPM.PM, price: 130 },
            { time: 6, ampm: AMPM.PM, price: 125 },
            { time: 7, ampm: AMPM.PM, price: 120 },
            { time: 8, ampm: AMPM.PM, price: 115 },
            { time: 9, ampm: AMPM.PM, price: 110 },
            { time: 10, ampm: AMPM.PM, price: 105 },
            { time: 11, ampm: AMPM.PM, price: 100 }
        ]
    },
    {
        id: 14,
        name: "76ers Game",
        date: new Date("2024-10-14"),
        price: 150,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 160 },
            { time: 8, ampm: AMPM.AM, price: 155 },
            { time: 9, ampm: AMPM.AM, price: 150 },
            { time: 10, ampm: AMPM.AM, price: 145 },
            { time: 11, ampm: AMPM.AM, price: 140 },
            { time: 12, ampm: AMPM.AM, price: 135 },
            { time: 1, ampm: AMPM.PM, price: 130 },
            { time: 2, ampm: AMPM.PM, price: 125 },
            { time: 3, ampm: AMPM.PM, price: 120 },
            { time: 4, ampm: AMPM.PM, price: 115 },
            { time: 5, ampm: AMPM.PM, price: 110 },
            { time: 6, ampm: AMPM.PM, price: 105 },
            { time: 7, ampm: AMPM.PM, price: 100 },
            { time: 8, ampm: AMPM.PM, price: 95 },
            { time: 9, ampm: AMPM.PM, price: 90 },
            { time: 10, ampm: AMPM.PM, price: 85 },
            { time: 11, ampm: AMPM.PM, price: 80 }
        ]
    },
    {
        id: 15,
        name: "Thunder Game",
        date: new Date("2024-10-15"),
        price: 130,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 140 },
            { time: 8, ampm: AMPM.AM, price: 135 },
            { time: 9, ampm: AMPM.AM, price: 130 },
            { time: 10, ampm: AMPM.AM, price: 125 },
            { time: 11, ampm: AMPM.AM, price: 120 },
            { time: 12, ampm: AMPM.AM, price: 115 },
            { time: 1, ampm: AMPM.PM, price: 110 },
            { time: 2, ampm: AMPM.PM, price: 105 },
            { time: 3, ampm: AMPM.PM, price: 100 },
            { time: 4, ampm: AMPM.PM, price: 95 },
            { time: 5, ampm: AMPM.PM, price: 90 },
            { time: 6, ampm: AMPM.PM, price: 85 },
            { time: 7, ampm: AMPM.PM, price: 80 },
            { time: 8, ampm: AMPM.PM, price: 75 },
            { time: 9, ampm: AMPM.PM, price: 70 },
            { time: 10, ampm: AMPM.PM, price: 65 },
            { time: 11, ampm: AMPM.PM, price: 60 }
        ]
    },
    {
        id: 16,
        name: "Pacers Game",
        date: new Date("2024-10-16"),
        price: 120,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 130 },
            { time: 8, ampm: AMPM.AM, price: 125 },
            { time: 9, ampm: AMPM.AM, price: 120 },
            { time: 10, ampm: AMPM.AM, price: 115 },
            { time: 11, ampm: AMPM.AM, price: 110 },
            { time: 12, ampm: AMPM.AM, price: 105 },
            { time: 1, ampm: AMPM.PM, price: 100 },
            { time: 2, ampm: AMPM.PM, price: 95 },
            { time: 3, ampm: AMPM.PM, price: 90 },
            { time: 4, ampm: AMPM.PM, price: 85 },
            { time: 5, ampm: AMPM.PM, price: 80 },
            { time: 6, ampm: AMPM.PM, price: 75 },
            { time: 7, ampm: AMPM.PM, price: 70 },
            { time: 8, ampm: AMPM.PM, price: 65 },
            { time: 9, ampm: AMPM.PM, price: 60 },
            { time: 10, ampm: AMPM.PM, price: 55 },
            { time: 11, ampm: AMPM.PM, price: 50 }
        ]
    },
    {
        id: 17,
        name: "Magic Game",
        date: new Date("2024-10-17"),
        price: 110,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 120 },
            { time: 8, ampm: AMPM.AM, price: 115 },
            { time: 9, ampm: AMPM.AM, price: 110 },
            { time: 10, ampm: AMPM.AM, price: 105 },
            { time: 11, ampm: AMPM.AM, price: 100 },
            { time: 12, ampm: AMPM.AM, price: 95 },
            { time: 1, ampm: AMPM.PM, price: 90 },
            { time: 2, ampm: AMPM.PM, price: 85 },
            { time: 3, ampm: AMPM.PM, price: 80 },
            { time: 4, ampm: AMPM.PM, price: 75 },
            { time: 5, ampm: AMPM.PM, price: 70 },
            { time: 6, ampm: AMPM.PM, price: 65 },
            { time: 7, ampm: AMPM.PM, price: 60 },
            { time: 8, ampm: AMPM.PM, price: 55 },
            { time: 9, ampm: AMPM.PM, price: 50 },
            { time: 10, ampm: AMPM.PM, price: 45 },
            { time: 11, ampm: AMPM.PM, price: 40 }
        ]
    },
    {
        id: 18,
        name: "Kings Game",
        date: new Date("2024-10-18"),
        price: 100,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 110 },
            { time: 8, ampm: AMPM.AM, price: 105 },
            { time: 9, ampm: AMPM.AM, price: 100 },
            { time: 10, ampm: AMPM.AM, price: 95 },
            { time: 11, ampm: AMPM.AM, price: 90 },
            { time: 12, ampm: AMPM.AM, price: 85 },
            { time: 1, ampm: AMPM.PM, price: 80 },
            { time: 2, ampm: AMPM.PM, price: 75 },
            { time: 3, ampm: AMPM.PM, price: 70 },
            { time: 4, ampm: AMPM.PM, price: 65 },
            { time: 5, ampm: AMPM.PM, price: 60 },
            { time: 6, ampm: AMPM.PM, price: 55 },
            { time: 7, ampm: AMPM.PM, price: 50 },
            { time: 8, ampm: AMPM.PM, price: 45 },
            { time: 9, ampm: AMPM.PM, price: 40 },
            { time: 10, ampm: AMPM.PM, price: 35 },
            { time: 11, ampm: AMPM.PM, price: 30 }
        ]
    },
    {
        id: 19,
        name: "Hornets Game",
        date: new Date("2024-10-19"),
        price: 90,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 180 },
            { time: 8, ampm: AMPM.AM, price: 95 },
            { time: 9, ampm: AMPM.AM, price: 90 },
            { time: 10, ampm: AMPM.AM, price: 85 },
            { time: 11, ampm: AMPM.AM, price: 80 },
            { time: 12, ampm: AMPM.AM, price: 75 },
            { time: 1, ampm: AMPM.PM, price: 70 },
            { time: 2, ampm: AMPM.PM, price: 65 },
            { time: 3, ampm: AMPM.PM, price: 60 },
            { time: 4, ampm: AMPM.PM, price: 55 },
            { time: 5, ampm: AMPM.PM, price: 50 },
            { time: 6, ampm: AMPM.PM, price: 45 },
            { time: 7, ampm: AMPM.PM, price: 90 },
            { time: 8, ampm: AMPM.PM, price: 135 },
            { time: 9, ampm: AMPM.PM, price: 130 },
            { time: 10, ampm: AMPM.PM, price: 125 },
            { time: 11, ampm: AMPM.PM, price: 120 }
        ]
    },
    {
        id: 20,
        name: "Nuggets Game",
        date: new Date("2024-10-20"),
        price: 140,
        chart: [
            { time: 7, ampm: AMPM.AM, price: 150 },
            { time: 8, ampm: AMPM.AM, price: 145 },
            { time: 9, ampm: AMPM.AM, price: 140 },
            { time: 10, ampm: AMPM.AM, price: 135 },
            { time: 11, ampm: AMPM.AM, price: 130 },
            { time: 12, ampm: AMPM.AM, price: 180 },
            { time: 1, ampm: AMPM.PM, price: 120 },
            { time: 2, ampm: AMPM.PM, price: 115 },
            { time: 3, ampm: AMPM.PM, price: 110 },
            { time: 4, ampm: AMPM.PM, price: 105 },
            { time: 5, ampm: AMPM.PM, price: 100 },
            { time: 6, ampm: AMPM.PM, price: 95 },
            { time: 7, ampm: AMPM.PM, price: 120 },
            { time: 8, ampm: AMPM.PM, price: 85 },
            { time: 9, ampm: AMPM.PM, price: 80 },
            { time: 10, ampm: AMPM.PM, price: 75 },
            { time: 11, ampm: AMPM.PM, price: 70 }
        ]
    },
    
]