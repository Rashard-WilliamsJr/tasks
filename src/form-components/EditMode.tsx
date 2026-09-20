import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name is a student");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Edit Mode</h3>
                <Form.Switch
                    type="checkbox"
                    id="EditMode?"
                    label="Edit"
                    checked={editMode}
                    onChange={updateEditMode}
                ></Form.Switch>
                {editMode && (
                    <Form.Group controlId="userName">
                        <Form.Label>Type Your Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={updateName}
                            disabled={!editMode}
                        ></Form.Control>
                    </Form.Group>
                )}
                {editMode && (
                    <Form.Switch
                        type="checkbox"
                        id="Are you a Student?"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateStudent}
                        disabled={!editMode}
                    ></Form.Switch>
                )}
            </div>
            <div>
                {isStudent ?
                    `${name} is a student.`
                :   `${name} is not a student.`}
            </div>
        </div>
    );
}
