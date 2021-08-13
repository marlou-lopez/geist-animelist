import { Grid, Text } from "@geist-ui/react";

const ErrorView: React.FC = () => {
  return (
    <Grid.Container justify="center" alignItems="center">
      <Text h2>
        Something went wrong.
      </Text>
    </Grid.Container>
  )
};

export default ErrorView;