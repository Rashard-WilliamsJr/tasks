import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [status, setStatus] = useState<boolean>(false);

    return (
        <div>
            <div>Start Attempt: {attempts}</div>
            <div>
                <Button
                    onClick={() => {
                        {
                            setAttempts(attempts - 1);
                            setStatus(true);
                        }
                    }}
                    disabled={status || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setStatus(false);
                    }}
                    disabled={!status}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setAttempts(attempts + 1);
                    }}
                    disabled={status}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
