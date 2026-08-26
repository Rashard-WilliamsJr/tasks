import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col
                        style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "red",
                        }}
                    ></Col>
                    <Col
                        style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "red",
                        }}
                    ></Col>
                </Row>
            </Container>
            <header className="App-header">
                <span style={{ color: "red" }}>
                    Rashard UD CISC275 with React Hooks and TypeScript
                </span>
            </header>
            <h1>This will be a great semester!</h1>
            <img
                src="C:\Users\rwill\tasks\public\logo512.png"
                alt="symbol of React"
            />
            <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>html & css</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
        </div>
    );
}

export default App;
