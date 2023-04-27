import { zodResolver } from "@hookform/resolvers/zod";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";
import { z } from "zod";
import { AvatarPicker } from "./AvatarPicker";
import { MyText } from "./MyText";
import Button from "./shared/Button";

const formSchema = z.object({
  name: z.string().min(1, "Username is required").max(100),
  birthDate: z.date(),
  avatar: z.string().url(),
});
type FormSchemaType = z.infer<typeof formSchema>;

export const AddUserForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birthDate: new Date(),
    },
  });
  const onSubmit = (data: FormSchemaType) => {
    console.log(data);
    router.push("/Dashboard");
  };

  return (
    <View style={{ padding: 20, gap: 30 }}>
      <MyText style={{ fontSize: 20 }} variant="extraBold">
        Enter Your Information
      </MyText>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={{ gap: 5 }}>
              <MyText variant="bold" style={{ fontSize: 16 }}>
                Name
              </MyText>
              <TextInput
                style={styles.input}
                placeholder="Enter your name."
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="name"
        />
        {errors.name && (
          <MyText style={{ color: "red" }}>This is required.</MyText>
        )}
      </View>

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <MyText variant="bold" style={{ fontSize: 16 }}>
              Birthday
            </MyText>
            <DateTimePicker
              testID="dateTimePicker"
              value={value || new Date()}
              onChange={(_e, d) => onChange(d)}
            />
          </View>
        )}
        name="birthDate"
      />

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={{ gap: 5, alignItems: "center", flexDirection: "row" }}>
            <MyText variant="bold" style={{ fontSize: 16 }}>
              Avatar
            </MyText>
            <AvatarPicker onChange={onChange} />
          </View>
        )}
        name="avatar"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "orange",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
