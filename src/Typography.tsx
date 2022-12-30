type TypographyProps = {
  fontFamily: string;
  fontSize?: string;
  fontWeight?: number;
};

const Typography = ({
  fontFamily,
  fontSize = "1.6rem",
  fontWeight = 400,
}: TypographyProps) => {
  return (
    <style jsx global>
      {`
        html {
          font-family: ${fontFamily};
          font-size: 62.5%;
        }

        body {
          font-size: ${fontSize};
          font-weight: ${fontWeight};
        }
      `}
    </style>
  );
};

export default Typography;
