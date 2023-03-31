import PropTypes from 'prop-types';
import css from './Section.module.css';

export function Section ({title, children}) {
    return (
        <div>
        <h2 className={css.section__title}>
            {title}
        </h2>
        {children}
        </div>
    );
}

Section.propTypes = {
 title: PropTypes.string.isRequired,
 children: PropTypes.node.isRequired
};
  