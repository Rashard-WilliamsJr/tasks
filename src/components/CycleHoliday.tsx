import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Holiday {
    name: string;
    month: number;
    emoji: string;
}
const favHolidays: Holiday[] = [
    { name: "Christmas", month: 12, emoji: "🎄" },
    { name: "Thanksgiving", month: 11, emoji: "🦃" },
    { name: "Halloween", month: 10, emoji: "🎃" },
    { name: "Easter", month: 3, emoji: "🐰" },
    { name: "New Year's", month: 1, emoji: "🪩" },
];

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(favHolidays[2]);

    function inOrderHolidays(): Holiday[] {
        const ascendingAlphabet: Holiday[] = favHolidays.sort(
            (holi: Holiday, prev: Holiday): number =>
                parseInt(holi.name[0]) - parseInt(prev.name[0]),
        );
        return ascendingAlphabet;
    }

    function numericalOrderHolidays(): Holiday[] {
        const ascendingNumerically: Holiday[] = favHolidays.sort(
            (holi: Holiday, prev: Holiday): number => holi.month - prev.month,
        );
        return ascendingNumerically;
    }

    function nextHoliday(holiday: string): void {
        const targetedHoliday: number = inOrderHolidays().findIndex(
            (holi: Holiday): boolean => holiday === holi.name,
        );
        const newHoliday: Holiday =
            inOrderHolidays()[(targetedHoliday + 1) % inOrderHolidays().length];
        setHoliday(newHoliday);
    }

    function nextNumHoliday(holiday: number): void {
        const targetedHoliday: number = numericalOrderHolidays().findIndex(
            (holi: Holiday): boolean => holiday === holi.month,
        );
        const newHoliday: Holiday =
            numericalOrderHolidays()[
                (targetedHoliday + 1) % numericalOrderHolidays().length
            ];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <div>Cycle Holiday</div>
            <div>
                <span>Holiday: {holiday.emoji}</span>
            </div>
            <div>
                <Button
                    onClick={() => {
                        nextHoliday(holiday.name);
                    }}
                >
                    Advance by Alphabet
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => {
                        nextNumHoliday(holiday.month);
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
