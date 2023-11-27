import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score, confusion_matrix

df = pd.read_csv('wine_dataset.csv')

y = df['style']
X = df.drop('style', axis=1)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

model = GaussianNB()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

print("Acuracia:", accuracy_score(y_test, y_pred))
print("Matriz de Confusao:\n", confusion_matrix(y_test, y_pred))
