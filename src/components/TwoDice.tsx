import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [die1, setDice1] = useState<number>(1);
    const [die2, setDice2] = useState<number>(6);
    return (
        <div>
            <div>Two Dice</div>
            <div>
                <Button
                    onClick={() => {
                        setDice1(d6());
                    }}
                >
                    Roll Left
                </Button>
                <span data-testid="left-die">{die1}</span>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setDice2(d6());
                    }}
                >
                    Roll Right
                </Button>
                <span data-testid="right-die">{die2}</span>
            </div>
            {die1 === 1 && die2 === 1 ?
                <div>Lose</div>
            : die1 === die2 ?
                <div>Win</div>
            :   null}
        </div>
    );
}
