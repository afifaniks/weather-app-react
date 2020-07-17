import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

export const Searchbar = () => {
    return (
        <Form>
            <div className="col-12 col-md-6 offset-md-3 mt-4">
                <div className="row">
                    <FormGroup className="col-9">
                        <Input type="text" 
                        placeholder="Enter Area Name or Geolocation" />
                    </FormGroup>
                    <Button type="submit" 
                    value="submit" 
                    className="col-3 search-btn" 
                    style={{color: "#000", 
                            backgroundColor: "#ffffff",
                            border: "none",
                            height: "54px",
                            borderRadius: "0px 30px 30px 0px"}}>
                        Search
                    </Button>
                </div>
            </div>
        </Form>    
    );
}