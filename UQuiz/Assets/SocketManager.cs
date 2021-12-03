using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class SocketManager : MonoBehaviour
{

    [Header("Question 1 Settings")]
    [SerializeField] GameObject CorrectAnswer1_1;
    [SerializeField] GameObject WrongAnswer1_1;
    [SerializeField] GameObject WrongAnswer2_1;

    [Header("Question 2 Settings")]
    [SerializeField] GameObject CorrectAnswer1_2;
    [SerializeField] GameObject WrongAnswer1_2;
    [SerializeField] GameObject WrongAnswer2_2;

    [Header("Question 3 Settings")]
    [SerializeField] GameObject CorrectAnswer1_3;
    [SerializeField] GameObject WrongAnswer1_3;
    [SerializeField] GameObject WrongAnswer2_3;

    [Space]
    public UnityEvent Correct;
    public UnityEvent Incorrect;
    private int index = 0;
    private string objectName;
    private int collisionCounter = 0;

    void OnEnable()
    {
        collisionCounter = 0;
        index++;
    }

    void Start() {
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnCollisionStay(Collision collisionInfo)
    {
        objectName = collisionInfo.gameObject.name;
        if (objectName != null && collisionCounter < 1) {
            if (index == 1) {
                if (collisionInfo.gameObject.name == CorrectAnswer1_1.gameObject.name ) {
                    Debug.Log("Correcto");
                    Destroy (CorrectAnswer1_1);
                    Destroy (WrongAnswer1_1);
                    Destroy (WrongAnswer2_1);

                    ScoreManager.scoreValue += 50;
                    Correct.Invoke();
                } else  {
                    Debug.Log("Incorrecto");
                    Destroy (CorrectAnswer1_1);
                    Destroy (WrongAnswer1_1);
                    Destroy (WrongAnswer2_1);

                    ScoreManager.scoreValue -= 25;
                    Incorrect.Invoke();
                }
            } else if (index == 2) {
                if (collisionInfo.gameObject.name == CorrectAnswer1_2.gameObject.name ) {
                    Debug.Log("Correcto");
                    Destroy (CorrectAnswer1_2);
                    Destroy (WrongAnswer1_2);
                    Destroy (WrongAnswer2_2);

                    ScoreManager.scoreValue += 50;
                    Correct.Invoke();
                } else  {
                    Debug.Log("Incorrecto");
                    Destroy (CorrectAnswer1_2);
                    Destroy (WrongAnswer1_2);
                    Destroy (WrongAnswer2_2);
                    
                    ScoreManager.scoreValue -= 25;
                    Incorrect.Invoke();
                }
            } else if (index == 3) {
                if (collisionInfo.gameObject.name == CorrectAnswer1_3.gameObject.name ) {
                    Debug.Log("Correcto");
                    Destroy (CorrectAnswer1_3);
                    Destroy (WrongAnswer1_3);
                    Destroy (WrongAnswer2_3);

                    ScoreManager.scoreValue += 50;
                    Correct.Invoke();
                } else  {
                    Debug.Log("Incorrecto");
                    Destroy (CorrectAnswer1_3);
                    Destroy (WrongAnswer1_3);
                    Destroy (WrongAnswer2_3);

                    ScoreManager.scoreValue -= 25;
                    Incorrect.Invoke();
                }
            }  
            collisionCounter++;
        }
    }
}
