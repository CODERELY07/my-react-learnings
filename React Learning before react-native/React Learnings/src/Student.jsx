import PropTypes from 'prop-types';
//props
function Student(props){
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    )
}

//propTypes
Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name : "Guest",
    age : 0,
    isStundet: false,
}
export default Student;

//goto app.jsx and find the comment "with props"