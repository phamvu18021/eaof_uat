import { Button, ButtonProps, Text } from "@chakra-ui/react";

export const BtnTheme = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"white"}
      size={"2xl"}
      rounded={"sm"}
      fontSize={"15px"}
      lineHeight={"63px"}
      p={"0 40px"}
      {...args}
      transform={"skew(-15deg, 0)"}
      bg={"linear-gradient(135deg,#035762 0%,#009eb3 100%)"}
      transition={"all ease .4s"}
      _hover={{
        background: "linear-gradient(135deg,#009eb3 0%, #035762 100%)"
      }}
    >
      <Text transform={"skew( 15deg, 0)"}> {children}</Text>
    </Button>
  );
};

export const BtnThemeinput = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"white"}
      size={"md"}
      rounded={"sm"}
      {...args}
      bg={"linear-gradient(70deg, #f68920 0%, #fc5934 100%)"}
      transition={"all ease .4s"}
      _hover={{
        background:
          "linear-gradient(70deg, rgba(252, 89, 52, 1),#054659 100%);",
        transform: "translateY(-4px)"
      }}
    >
      {children}
    </Button>
  );
};
export const BtnThemeContacts = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"white"}
      size={"md"}
      rounded={"sm"}
      {...args}
      bg={"#007bff"}
      transition={"all ease .4s"}
      borderRadius={"100px"}
      h={"50px"}
      _hover={{
        background: "linear-gradient(70deg, #f68920 0%, #fc5934 100%)",
        transform: "translateY(-4px)"
      }}
    >
      {children}
    </Button>
  );
};
export const BtnThemeContactsfooter = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"white"}
      size={"md"}
      rounded={"sm"}
      borderRadius="4px"
      {...args}
      bg={"linear-gradient(90deg,#f55301 0%,#ff9f00 50%,#f55301)"}
      transition={"all ease .4s"}
      h={"50px"}
      _hover={{
        background: "linear-gradient(70deg, #f68920 0%, #fc5934 100%)"
      }}
    >
      {children}
    </Button>
  );
};

export const BtnThemes = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"white"}
      size={"md"}
      rounded={"sm"}
      {...args}
      bg={"#007bff"}
      transition={"all ease .4s"}
    >
      {children}
    </Button>
  );
};
export const BtnThemeContact = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"white"}
      size={"md"}
      rounded={"sm"}
      {...args}
      bg={"linear-gradient(90deg,#f55301 0%,#ff9f00 50%,#f55301)"}
      transition={"all ease .4s"}
      h={"60px"}
      _hover={{
        background: "linear-gradient(70deg, #f68920 0%, #fc5934 100%)"
      }}
    >
      {children}
    </Button>
  );
};
