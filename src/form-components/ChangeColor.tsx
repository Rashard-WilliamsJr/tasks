import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS: string[] = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((col: string) => (
                <Form.Check
                    inline
                    key={col}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="selectColor"
                    label={col}
                    value={col}
                    checked={col === color}
                ></Form.Check>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor:
                        COLORS[
                            COLORS.findIndex(
                                (col: string): boolean => col === color,
                            )
                        ],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px",
                }}
            >
                The color is {color}
            </div>
        </div>
    );
}
