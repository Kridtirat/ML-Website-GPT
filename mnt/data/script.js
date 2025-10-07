// script.js — interactive behaviors (no dependencies)
document.addEventListener('DOMContentLoaded', function() {
  // Algorithm descriptions
  const algos = {
    lr: {
      title: 'Linear Regression',
      text: 'Predicts a continuous target using a linear combination of features. Key concepts: least squares, R², gradient descent, regularization (L1/L2).'
    },
    dt: {
      title: 'Decision Tree',
      text: 'Tree-based model that splits data by feature thresholds. Good for interpretability; prone to overfitting. Use pruning and ensemble methods (Random Forest, Gradient Boosting) to improve.'
    },
    knn: {
      title: 'k-Nearest Neighbors',
      text: 'Instance-based method that predicts based on nearest labeled examples. No training cost, but prediction cost grows with data size; sensitive to feature scaling.'
    },
    kmeans: {
      title: 'k-Means Clustering',
      text: 'Unsupervised algorithm that partitions data into K clusters by minimizing within-cluster variance. Requires choosing K and feature scaling.'
    }
  };

  const select = document.getElementById('algoSelect');
  const desc = document.getElementById('algoDesc');

  select.addEventListener('change', function() {
    const val = select.value;
    if(!val){
      desc.innerHTML = '';
      return;
    }
    const info = algos[val];
    desc.innerHTML = '<strong>' + info.title + '</strong><p>' + info.text + '</p>';
  });

  // Curriculum export
  const exportBtn = document.getElementById('exportBtn');
  exportBtn.addEventListener('click', function(){
    const curriculum = {
      title: 'ML Academy — Short Curriculum',
      sections: [
        {name:'Basics', items:['What is ML','Data pipeline','Linear Regression','k-NN','Decision Trees']},
        {name:'Intermediate', items:['Cross-validation','Feature engineering','Regularization','Model selection']},
        {name:'Advanced', items:['Deep Learning','MLOps','Time series','Probabilistic models']}
      ]
    };
    const blob = new Blob([JSON.stringify(curriculum,null,2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ml_curriculum.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  // Simple internal navigation highlight
  const links = document.querySelectorAll('nav a');
  links.forEach(l=>{
    if(l.getAttribute('href') === location.pathname.split('/').pop() || (l.getAttribute('href') === 'index.html' && location.pathname.endsWith('/'))){
      l.classList.add('active');
    }
  });
});
