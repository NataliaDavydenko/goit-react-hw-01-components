import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import { FriendListItem } from './friendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend__list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
                id={id}
                key={id}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
