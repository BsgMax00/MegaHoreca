import { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";

export default function DropdownProfile() {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <Dropdown
            align={"end"}
            className="ms-2"
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}>
            <Dropdown.Toggle variant="outline-primary">
                <i className="icon-surface1-30" />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: "20rem" }}>
                <Form className="p-3">
                    <Form.Group>
                        <Form.Label>E-mail adress</Form.Label>
                        <Form.Control type="email" id="emailField"
                            placeholder="E-mail" />
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>passwoord</Form.Label>
                        <Form.Control type="password"
                            id="passwordField" placeholder="passwoord" />
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Check type="checkbox" label="onthoud mij" id="rememberMeCheckbox" />
                    </Form.Group>
                    <div className="w-100 d-flex justify-content-end">
                        <Button type="submit" className="mt-3 w-100" variant="primary">log in</Button>
                    </div>
                </Form>
                <Dropdown.Divider />
                <Dropdown.Item>Ben je nieuw hier? Schrijf je in!</Dropdown.Item>
                <Dropdown.Item>Wachtwoord vergeten?</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}