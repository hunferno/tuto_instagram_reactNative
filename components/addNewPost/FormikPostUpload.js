import React, { useState } from "react";
import { View, Image, TextInput, Button, Text } from "react-native";
import { Divider } from "react-native-elements";

import * as yup from "yup";
import { Formik } from "formik";

const PLACEHOLDER_IMG =
  "https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg";

const uploadPostSchema = yup.object().shape({
  imageUrl: yup.string().url().required("A URL is required"),
  caption: yup.string().max(2200, "Caption has reached the character limit"),
});

export default function FormikPostUpload({ navigation }) {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => (console.log(values), navigation.goBack())}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }}
              />
              <View
                style={{
                  flex: 1,
                  marginLeft: 20,
                }}
              >
                <TextInput
                  style={{ color: "white", fontSize: 20 }}
                  placeholder="Write a caption"
                  placeholderTextColor="gray"
                  multiline={true}
                  onChangeText={handleChange("caption")}
                  onBlur={handleBlur("caption")}
                  value={values.caption}
                />
                {errors.caption && (
                  <Text style={{ color: "red", fontSize: 10 }}>
                    {errors.caption}
                  </Text>
                )}
              </View>
            </View>
            <Divider
              style={{ color: "white", marginVertical: 10 }}
              width={1}
              orientation="vertical"
            />
            <View style={{ marginBottom: 10 }}>
              <TextInput
                onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                style={{ color: "white", fontSize: 18 }}
                placeholder="Enter Image URL..."
                placeholderTextColor="gray"
                onChangeText={handleChange("imageUrl")}
                onBlur={handleBlur("imageUrl")}
                value={values.imageUrl}
              />
            </View>
            {errors.imageUrl && (
              <Text style={{ color: "red", fontSize: 10 }}>
                {errors.imageUrl}
              </Text>
            )}
            <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
          </View>
        </>
      )}
    </Formik>
  );
}
