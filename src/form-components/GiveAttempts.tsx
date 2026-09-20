import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptRequests, setAttemptRequests] = useState<string>("0");
    const userInput: number = parseInt(attemptRequests) || 0;
    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptRequests(event.target.value);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <h4>Remaining Attempts: {attemptsLeft}</h4>
            <Form.Group controlId="requestingAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptRequests}
                    onChange={updateAttempts}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft + userInput);
                }}
            >
                gain
            </Button>
        </div>
    );
}
