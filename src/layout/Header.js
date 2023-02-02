import LinkText from "@/components/atoms/LinkText";

const Header = () => {
  return (
    <nav>
      <LinkText path="/" title="Home"></LinkText>
      <LinkText path="/profile" title="Profile"></LinkText>
      <LinkText path="/signin" title="Sign In"></LinkText>
    </nav>
  );
};

export default Header;
