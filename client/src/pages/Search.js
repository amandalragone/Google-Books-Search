import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {

      axios.get("/api/books/search/" + this.state.title).then(response => {
        this.setState({
          title: "",
          books: response.data
        });

        console.log(this.state.books)
  
      });
      
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron/>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <form>
              <h3>Book Search</h3>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Book Title (required)"
              />
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
         <Col size="md-12">
           <h3>Results</h3>
           <ul>
           {this.state.books.map(book => {

              return (
                <li>
                  <h4 style={{clear: 'both'}}>{book.volumeInfo.title}</h4>
                  <h5>{book.volumeInfo.authors}</h5>
                  <img src={book.volumeInfo.imageLinks.thumbnail} style={{float: 'left'}}/>
                  <p>{book.volumeInfo.description}</p>
                  <span>Link: {book.volumeInfo.infoLink}</span>
                </li>
              )
              })}

           </ul>
           
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
