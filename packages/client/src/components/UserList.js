import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withStyles } from "@material-ui/core/styles";
import { Text, View } from "react-native";

const styles = theme => ({
  root: {
    maxWidth: 700,
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    margin: "auto"
  },
  table: {
    minWidth: 700,
    backgroundColor: "#222"
  }
});

const Row = ({ children }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      {children}
    </View>
  );
};

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: "asc",
      orderBy: "name",
      page: 0,
      rowsPerPage: 10
    };
  }

  handleSortRequest = property => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  render() {
    const { order, orderBy } = this.state;
    return (
      <Query
        query={gql`
          query usersPaginateQuery($first: Int, $offset: Int) {
            User(first: $first, offset: $offset) {
              id
              name
              avgStars
              numReviews
            }
          }
        `}
        variables={{
          first: this.state.rowsPerPage,
          offset: this.state.rowsPerPage * this.state.page
        }}
      >
        {({ loading, error, data }) => {
          console.log(loading, error, data);
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error</Text>;

          return (
            <View className={this.props.classes.root}>
              <View className={this.props.classes.table}>
                <View>
                  <Row>
                    <View
                      key="name"
                      sortDirection={orderBy === "name" ? order : false}
                      style={{ flex: 1 }}
                    >
                      <View
                        title="Sort"
                        placement="bottom-start"
                        enterDelay={300}
                      >
                        <Text
                          active={orderBy === "name"}
                          direction={order}
                          onClick={() => this.handleSortRequest("name")}
                        >
                          Name
                        </Text>
                      </View>
                    </View>
                    <View
                      key="avgStars"
                      sortDirection={orderBy === "avgStars" ? order : false}
                      numeric
                      style={{ flex: 1 }}
                    >
                      <View
                        title="Sort"
                        placement="bottom-end"
                        enterDelay={300}
                      >
                        <Text
                          active={orderBy === "avgStars"}
                          direction={order}
                          onClick={() => this.handleSortRequest("avgStars")}
                        >
                          Average Stars
                        </Text>
                      </View>
                    </View>
                    <View
                      key="numReviews"
                      sortDirection={orderBy === "numReviews" ? order : false}
                      numeric
                      style={{ flex: 1 }}
                    >
                      <View
                        title="Sort"
                        placement="bottom-start"
                        enterDelay={300}
                      >
                        <Text
                          active={orderBy === "numReviews"}
                          direction={order}
                          onClick={() => this.handleSortRequest("numReviews")}
                        >
                          Number of Reviews
                        </Text>
                      </View>
                    </View>
                  </Row>
                </View>
                <View>
                  {data.User.map(n => {
                    return (
                      <Row key={n.id}>
                        <View style={{ flex: 1 }}>
                          <Text component="th" scope="row">
                            {n.name}
                          </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text numeric>
                            {n.avgStars ? n.avgStars.toFixed(2) : "-"}
                          </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text numeric>{n.numReviews}</Text>
                        </View>
                      </Row>
                    );
                  })}
                </View>
              </View>
            </View>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(UserList);
