import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  titleStyle: {
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 24,
    fontSize: 28
  },
  inputField: {
    backgroundColor: '#DDDDDD',
    marginHorizontal: 24,
    marginTop: 24,
    padding: 8,
    borderRadius: 8
  },
  button: {
    marginHorizontal: 24,
    marginTop: 24,
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: '#202020',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700'
  },
  listItem: {
    marginHorizontal: 24,
    marginBottom: 16,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#8888FF'
  }
})

export default styles
