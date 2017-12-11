import pandas as pd

df = pd.read_csv('mushrooms.csv')
df = df[df.odor == 'n']
df.to_csv("trimmed_dataset.csv")
df
