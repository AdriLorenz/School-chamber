using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;
using UnityEngine.Events;
using UnityEngine.UI;

public class AnswerHandler : MonoBehaviour
{
    public bool isCorrect;
    [SerializeField] GameObject Question;

    public UnityEvent NextQuestion;

    private float currentTime = 0f;
    private float startingTime = 5f;

    private GameObject selectedGameObject;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnEnable() {
        if (isCorrect == true) {
            Debug.Log("Es correcto");
            Question.gameObject.SetActive(false);
            NextQuestion.Invoke();
        } else {
            Debug.Log("Es incorrecto");
            currentTime = startingTime;
            currentTime -= 1 * Time.deltaTime;
            if (currentTime < 0) {
                
            }
        }
    }
}
