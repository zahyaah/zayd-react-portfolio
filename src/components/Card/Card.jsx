import PropTypes from "prop-types"
import styles from "./Card.module.css"

export default function Card(props) {
    return (
        <>
            <div className={styles.cardWrapper}>
                <div className={styles.cardHead}>{props.head}</div>

                <div className={styles.cardFlexContainer}>
                    {props.values && props.values.length > 0 ?
                        props.values.map((value) => (
                            <div key={props.values.indexOf(value)}>
                                <div className="material-symbols-outlined">check_circle</div>
                                <span>{value}</span>
                            </div>
                        )) : null
                    }
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    head: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string)
}

Card.defaultProps = {
    head: "Heading",
    values: ["Value 1", "Value 2", "Value 3", "Value 4"]
}

