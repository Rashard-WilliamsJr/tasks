import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisbility] = useState<boolean>(false);
    function Reveal(): void {
        setVisbility(!visible);
    }
    return (
        <div>
            <Button onClick={Reveal}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
