import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export type titleProps = {
  title: string;
  action: string;
};

2;
export default function Title({ title, action }: titleProps) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.category}>{title}</Text>
        <Pressable>
          <Text style={styles.action}>{action}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  category: {
    fontSize: 16,
    fontWeight: "500",
  },

  action: {
    color: "gray",
    fontSize: 15,
    fontWeight: "300",
  },
});

//1
// export default function Title({title,action}: {title:string, action:string}) {
//   return (
//     <View>
//       <View style={styles.container}>
//         <Text style={styles.category}>{title}</Text>
//         <Pressable>
//           <Text style={styles.action}>{action}</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const Title: React.FC<titleProps> = ({ title, action }) => (
//   <View style={styles.container}>
//     <Text style={styles.category}>{title}</Text>
//     <Pressable>
//       <Text style={styles.action}>{action}</Text>
//     </Pressable>
//   </View>
// );
