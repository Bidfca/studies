# A distribuição binomial é usada para obter a probabilidade de observar x sucessos em n tentativas, com a probabilidade de sucesso em uma única tentativa dada por p

# Probabilidade específica de que o lado Cara aparecerá exatamente 10 vezes depois de 20 lançamentos de moeda

import matplotlib.pyplot as plt
import numpy as np
from scipy.stats import binom

n = 20
p = 0.5
x = np.arange(0, n+1)

binomial = binom.pmf(k=x,n=n, p=p)

plt.bar(x, binomial)
plt.xlabel("x", fontsize=12)
plt.ylabel("Probabilidade", fontsize=12)
plt.xlim([-1, n+1])
plt.title("Distribuição Binomial, n={0}, p={1}".format(n, p),fontsize= 15)
plt.show()

