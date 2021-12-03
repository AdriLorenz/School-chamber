using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnswersSpawner : MonoBehaviour
{
    [SerializeField] GameObject correctAnswer;
    [SerializeField] GameObject incorrectAnswer1;
    [SerializeField] GameObject incorrectAnswer2;

    public void spawn() {
        Instantiate(correctAnswer, new Vector3(-3.4f, 9.2f, 50.8f), Quaternion.identity);
        Instantiate(correctAnswer, new Vector3(-2.3f, 9.2f, 50.8f), Quaternion.identity);
        Instantiate(correctAnswer, new Vector3(5.3f, 9.2f, 58.9f), Quaternion.identity);
    }

    void Start()
    {
        
    }

    
    void Update()
    {
        
    }
}
